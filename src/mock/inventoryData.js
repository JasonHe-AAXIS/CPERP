function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}


export const inventoryData = [
    {
        sn: uuid(),
        brand: 'oppo',
        model: 'oppo30',
        memory: '8G',
        size: '64G',
        color: 'red'
    },
    {
        sn: uuid(),
        brand: 'hw',
        model: 'p30',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'vivo',
        model: 'vivo30',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'oppo',
        model: 'oppo30',
        memory: '8G',
        size: '64G',
        color: 'green'
    }, {
        sn: uuid(),
        brand: 'vivo',
        model: 'vivo30',
        memory: '8G',
        size: '64G',
        color: 'yellow'
    }, {
        sn: uuid(),
        brand: 'hw',
        model: 'p30',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'hw',
        model: 'p40',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'oppo',
        model: 'oppo30',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'oppo',
        model: 'oppo30',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'oppo',
        model: 'oppo30',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'oppo',
        model: 'oppo30',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'oppo',
        model: 'oppo30',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'oppo',
        model: 'oppo30',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'oppo',
        model: 'oppo30',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'oppo',
        model: 'oppo30',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'oppo',
        model: 'oppo30',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'oppo',
        model: 'oppo30',
        memory: '8G',
        size: '64G',
        color: 'red'
    }, {
        sn: uuid(),
        brand: 'oppo',
        model: 'oppo30',
        memory: '8G',
        size: '64G',
        color: 'red'
    },
]