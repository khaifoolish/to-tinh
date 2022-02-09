window.onload = function () {
  let noBtn = document.getElementById("no-btn");
  noBtn.addEventListener("mouseover", function () {
    document.getElementById("no-btn").innerHTML = "Đồng ý";
  });

  noBtn.addEventListener("mouseout", function () {
    document.getElementById("no-btn").innerHTML = "Không";
  });

  noBtn.addEventListener("click", function () {
    alert("Em đồng ý rồi nha. I love you bae <3");
  });

  let yesBtn = document.getElementById("yes-btn");
  yesBtn.addEventListener("click", function () {
    alert("Em đồng ý rồi nha. I love you bae <3");
  });
};
