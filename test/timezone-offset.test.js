'use strict'

var t = require('tap')
var test = t.test
var DateFormatter = require('..')

test('Z', (t) => {
  t.plan(49)
  offsetZ(t, -720, '+1200')
  offsetZ(t, -690, '+1130')
  offsetZ(t, -660, '+1100')
  offsetZ(t, -630, '+1030')
  offsetZ(t, -600, '+1000')
  offsetZ(t, -570, '+0930')
  offsetZ(t, -540, '+0900')
  offsetZ(t, -510, '+0830')
  offsetZ(t, -480, '+0800')
  offsetZ(t, -450, '+0730')
  offsetZ(t, -420, '+0700')
  offsetZ(t, -390, '+0630')
  offsetZ(t, -360, '+0600')
  offsetZ(t, -330, '+0530')
  offsetZ(t, -300, '+0500')
  offsetZ(t, -270, '+0430')
  offsetZ(t, -240, '+0400')
  offsetZ(t, -210, '+0330')
  offsetZ(t, -180, '+0300')
  offsetZ(t, -150, '+0230')
  offsetZ(t, -120, '+0200')
  offsetZ(t, -90, '+0130')
  offsetZ(t, -60, '+0100')
  offsetZ(t, -30, '+0030')
  offsetZ(t, 0, '-0000')
  offsetZ(t, 30, '-0030')
  offsetZ(t, 60, '-0100')
  offsetZ(t, 90, '-0130')
  offsetZ(t, 120, '-0200')
  offsetZ(t, 150, '-0230')
  offsetZ(t, 180, '-0300')
  offsetZ(t, 210, '-0330')
  offsetZ(t, 240, '-0400')
  offsetZ(t, 270, '-0430')
  offsetZ(t, 300, '-0500')
  offsetZ(t, 330, '-0530')
  offsetZ(t, 360, '-0600')
  offsetZ(t, 390, '-0630')
  offsetZ(t, 420, '-0700')
  offsetZ(t, 450, '-0730')
  offsetZ(t, 480, '-0800')
  offsetZ(t, 510, '-0830')
  offsetZ(t, 540, '-0900')
  offsetZ(t, 570, '-0930')
  offsetZ(t, 600, '-1000')
  offsetZ(t, 630, '-1030')
  offsetZ(t, 660, '-1100')
  offsetZ(t, 690, '-1130')
  offsetZ(t, 720, '-1200')
})

test('ZZ', (t) => {
  t.plan(49)
  offsetZZ(t, -720, '+12:00')
  offsetZZ(t, -690, '+11:30')
  offsetZZ(t, -660, '+11:00')
  offsetZZ(t, -630, '+10:30')
  offsetZZ(t, -600, '+10:00')
  offsetZZ(t, -570, '+09:30')
  offsetZZ(t, -540, '+09:00')
  offsetZZ(t, -510, '+08:30')
  offsetZZ(t, -480, '+08:00')
  offsetZZ(t, -450, '+07:30')
  offsetZZ(t, -420, '+07:00')
  offsetZZ(t, -390, '+06:30')
  offsetZZ(t, -360, '+06:00')
  offsetZZ(t, -330, '+05:30')
  offsetZZ(t, -300, '+05:00')
  offsetZZ(t, -270, '+04:30')
  offsetZZ(t, -240, '+04:00')
  offsetZZ(t, -210, '+03:30')
  offsetZZ(t, -180, '+03:00')
  offsetZZ(t, -150, '+02:30')
  offsetZZ(t, -120, '+02:00')
  offsetZZ(t, -90, '+01:30')
  offsetZZ(t, -60, '+01:00')
  offsetZZ(t, -30, '+00:30')
  offsetZZ(t, 0, '-00:00')
  offsetZZ(t, 30, '-00:30')
  offsetZZ(t, 60, '-01:00')
  offsetZZ(t, 90, '-01:30')
  offsetZZ(t, 120, '-02:00')
  offsetZZ(t, 150, '-02:30')
  offsetZZ(t, 180, '-03:00')
  offsetZZ(t, 210, '-03:30')
  offsetZZ(t, 240, '-04:00')
  offsetZZ(t, 270, '-04:30')
  offsetZZ(t, 300, '-05:00')
  offsetZZ(t, 330, '-05:30')
  offsetZZ(t, 360, '-06:00')
  offsetZZ(t, 390, '-06:30')
  offsetZZ(t, 420, '-07:00')
  offsetZZ(t, 450, '-07:30')
  offsetZZ(t, 480, '-08:00')
  offsetZZ(t, 510, '-08:30')
  offsetZZ(t, 540, '-09:00')
  offsetZZ(t, 570, '-09:30')
  offsetZZ(t, 600, '-10:00')
  offsetZZ(t, 630, '-10:30')
  offsetZZ(t, 660, '-11:00')
  offsetZZ(t, 690, '-11:30')
  offsetZZ(t, 720, '-12:00')
})

test('ZZ', (t) => {
  t.plan(1)
  var date = new Date(2000, 2, 1, 3, 4, 5, 1)
  var dateFormatter = new DateFormatter('ZZ')

  var formatted = dateFormatter.format(date)

  t.ok(/[+-]\d{2}:\d{2}/.test(formatted))
})

test('Z', (t) => {
  t.plan(1)
  var date = new Date(2000, 2, 1, 3, 4, 5, 1)
  var dateFormatter = new DateFormatter('Z')

  var formatted = dateFormatter.format(date)

  t.ok(/[+-]\d{4}/.test(formatted))
})

function offsetZ (t, offset, expected) {
  testOffset(t, 'Z', offset, expected)
}

function offsetZZ (t, offset, expected) {
  testOffset(t, 'ZZ', offset, expected)
}

function testOffset (t, format, offset, expected) {
  var date = {
    getTimezoneOffset () {
      return offset
    }
  }
  var dateFormatter = new DateFormatter(format)
  var formatted = dateFormatter.format(date)
  t.strictEquals(formatted, expected)
}
