var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

// 设计场地预订信息存储结构如下：
// court = {
//     'X': {
//         '2018-2-3': [{'usr': , 'start': , 'end': ,tag:'B'}, {}, {}], // B代表已经预订,C代表预订后取消
//         '2018-2-4': [],
//     },
//     'N': {}
// }
var court = {
    'X': {},
    'N': {},
    'G': {},
    'H': {},
}

// 价格表
var price1 = [25, 25, 25, 40, 40, 40, 40, 30, 30, 30, 90, 90, 70, 70];
var price2 = [50, 50, 50, 50, 70, 70, 70, 70, 70, 90, 90, 90, 90, 90];

rl.setPrompt('> ');
rl.prompt();

rl.on('line', function(line) {
    if (line == ' ') {
        // 输入为空格则打印收入
        print();
    } else {
        var bookinfo = line.trim().split(' ');
        if (bookinfo.length == 4) {
            book_merge(bookinfo, 'B');
        } else if (bookinfo.length == 5) {
            book_merge(bookinfo, 'C');
        } else {
            console.log('Error: the booking is invalid!');
        }
    }
    rl.prompt();
});

rl.on('quit', function() {
    console.log('Thanks for using!');
    process.exit(0);
});

function book_merge(bookinfo, tag) {
    if (tag == 'C') {
        if (bookinfo[4] != 'Cancel') {
            console.log('Error: the booking is valid!');
            return;
        }
    }
    // 判断输入日期以及输入时间段是否符合格式要求
    if (!/\d{4}-\d{1,2}-\d{1,2}/.test(bookinfo[1]) || !/\d{2}:\d{2}~\d{2}:\d{2}/.test(bookinfo[2])) {
        console.log('Error: the booking is valid!');
        return;
    }
    var usr = bookinfo[0],
        day = bookinfo[1],
        start = bookinfo[2].split('~')[0],
        end = bookinfo[2].split('~')[1],
        cur = bookinfo[3];
    // 判断输入日期是否合法
    if (is_unlegal_date(day)) {
        console.log('Error: the booking is valid! Date is unlegal!');
        return;
    }
    // 判断输入时间段是否合法，是否是整点
    if (is_unlegal_time(start) || is_unlegal_time(end)) {
        console.log('Error: the booking is invalid! Time must be integral point and between 8~22!');
        return;
    }
    // 判断输入场地是否存在
    if (is_unlegal_court(cur)) {
        console.log("Error: the booking is invalid! Court must be one of ['X', 'N', 'G', 'H']");
        return;
    }
    // 分离出预订时间
    start = parseInt(start.split(':')[0]);
    end = parseInt(end.split(':')[0]);
    // 预订时间应当大于当前时间，开始时间应当大于结束时间
    if (start >= end) {
        console.log('Error: the booking is invalid! Start-time must be smaller than end-time!');
        return;
    }
    if (new Date(day.replace(/-/g, '/')) < new Date() && start <= new Date().getHours()) {
        console.log('Error: the booking is invalid! Start-time must be later than current time!');
        return;
    }
    if (tag == 'B') {
        if (court[cur][day] != undefined) {
            for (var book of court[cur][day]) {
                if (has_booked(start, end, book)) {
                    console.log('Error: the booking conflict with existing bookings!');
                    return;
                }
            }
            book_success(cur, day, usr, start, end);
        } else {
            court[cur][day] = [];
            book_success(cur, day, usr, start, end);
        }
    } else {
        if (court[cur][day] != undefined) {
            for (var book of court[cur][day]) {
                // 如果该时间断被预订且取消预订人姓名一致则同意取消预订
                if (has_booked(start, end, book) && book['usr'] == usr) {
                    book['tag'] = 'C';
                    console.log('Success: the booking is cancelled!')
                    return;
                }
            }
            // 未找到符合要求的预订
            console.log('Error: the booking being cancelled does not exist!')
        } else {
            console.log('Error: the booking being cancelled does not exist!')
        }
    }
}

// 判断输入日期是否合法
function is_unlegal_date(date) {
    var dateObj = date.split('-'),
        max_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        year = dateObj[0],
        month = dateObj[1],
        day = dateObj[2];
    // 判断是否是闰年
    var isLeap = new Date(year, 1, 29).getDate() === 29;
    if (isLeap) {
        max_day[1] = 29;
    }
    return !(day <= max_day[month - 1] && month <= 12 && month >= 1);
}

// 判断预订时间段是否合法，是否为整点
function is_unlegal_time(time) {
    var hour = parseInt(time.split(':')[0]),
        min = time.split(':')[1];
    if (min != '00') {
        return true;
    }
    if (hour < 8 || hour > 22) {
        return true;
    }
    return false;
}

// 判断预订场地是否存在
function is_unlegal_court(cur) {
    if (['X', 'N', 'G', 'H'].indexOf(cur) == -1) {
        return true;
    }
    return false;
}

// 判断该时间段是否被预订
function has_booked(start, end, book) {
    // console.log(start, end, book);
    if (start >= book['end'] || end <= book['start']) {
        // console.log(1)
        return false;
    }
    if (book['tag'] == 'C') {
        // console.log(2)
        return false;
    }
    // console.log(3)
    return true;
}

// 添加预订成功信息
function book_success(cur, day, usr, start, end) {
    var books = court[cur][day];
    // 插入新预订信息前排序
    for (var i = 0; i < books.length; i++) {
        if (end <= books[i]['start']) {
            books.splice(i, 0, {
                'usr': usr,
                'start': start,
                'end': end,
                'tag': 'B'
            });
            console.log('Success: the booking is accepted!');
            return;
        }
    }
    books.push({
        'usr': usr,
        'start': start,
        'end': end,
        'tag': 'B'
    });
    console.log('Success: the booking is accepted!');
}

// 打印收入
function print() {
    console.log('income summary:');
    console.log('------');
    var total = 0;
    for (var cur in court) {
        console.log('place: ' + cur);
        var sub_total = 0;
        var date_arr = [];
        for (var books in court[cur]) {
            date_arr.push(books);
        }
        // 按日期排序
        date_arr = date_arr.sort(function(a, b) {
            return new Date(a.replace(/-/g, '/')) > new Date(b.replace(/-/g, '/')) ? 1 : -1;
        })
        for (var books of date_arr) {
            // 得到当天是星期几
            var week_index = new Date(books.replace(/-/g, '/')).getDay();
            for (var book of court[cur][books]) {
                var temp = compute_income(week_index, book);
                var penalty = book['tag'] == 'B' ? '' : ' penalty'
                console.log(books + ' ' + book['start'] + ':00' + '~' + book['end'] + ':00' + penalty + ' ' + temp + 'yuan');
                sub_total += temp;
            }
        }
        total += sub_total;
        console.log('subtotal: ' + sub_total + 'yuan');
        if (cur != 'H') {
            console.log('\n');
        }
    }
    console.log('------');
    console.log('total: ' + total + 'yuan');
}

// 计算每条预订信息的收入
function compute_income(week_index, book) {
    var total = 0;
    var price = week_index <= 5 ? price1 : price2;
    for (var i = book['start']; i < book['end']; i++) {
        total += price[i - 8];
    }
    var discount = week_index <= 5 ? 0.7 : 0.3;
    return book['tag'] == 'B' ? total : total * discount;
}