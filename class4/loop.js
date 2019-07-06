// For loop
function logOddNumberSmallerThan(number) {
  // begin:       let i = 0           (chỉ chạy lần đầu)
  // condition:   i < number          (1)
  // step         i++                 (3)
  // body         code giữa 2 dấu {}  (2)
  for (let i = 0; i < number; i++) {
    if (i >= 15) return //Khi gặp keyword return, vòng lặp sẽ kết thúc
    if (i % 2 === 0) {
      //Khi gặp keyword continue,
      // code sẽ không chạy những đoạn code
      // phía dưới continue và nhảy qua vòng lặp mới
      continue
    }
    console.log(i)
  }
}

// While loop
function logOddNumberSmallerThan(number) {
  let i = 0
  while (i < number && i < 15) {
    //condition
    if (i % 2 === 1) console.log(i)
    i++
  }
}
