$(document).ready(function () {
  const winners = new Set();
  // $("#submit").on("click", function (e) {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   $("#output").show();
  //   $("#winnerOutput").html("");

  //   //  шибай героите в шибания списък
  //   let initList = $("#winnersList").val().trim().split("\n");
  //   const list = [];

  //   // чисти празните
  //   $(initList).each(function (i, item) {
  //     item === "" ? (item = "") : list.push(item);
  //   });

  //   const winnerQty = $("#winnerQty").val();
  //   const uniqueParticipants = new Set(list);
  //   if (winnerQty < uniqueParticipants.size) {
  //     while (winners.size < winnerQty) {
  //       const index = Math.floor(Math.random() * list.length);
  //       const winner = list[index];
  //       winners.add(winner);
  //     }
  //     winners.forEach((winner) => {
  //       $("#winnerOutput").append($("<li>").append(winner));
  //     });
  //   }
  // });

  $("#submitInput").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    $("#csvFile").parse({
      config: {
        delimiter: "auto",
        complete: display,
      },
      before: function (file, inputElem) {
        console.log("Parsing file...", file);
      },
      error: function (err, file) {
        console.log("ERROR:", err, file);
      },
      complete: function () {
        console.log("Done with all files");
      },
    });
  });

  function display(results) {
    const { data } = results;
    const participants = [];

    for (const csvItem of data) {
      const [name, chances] = csvItem[0].split(",");
      if (name && chances && !isNaN(chances)) {
        for (let i = 0; i < chances; i += 1) {
          participants.push(name);
        }
      }
    }

    const winnerQty = $("#winnerQty").val();
    let winners = [];

    for (let x = 0; x < winnerQty; x += 1) {
      const index = Math.floor(Math.random() * participants.length);
      const winner = participants[index];
      winners.push(winner);
    }

    winners.forEach((winner) => {
      $("#winnerOutput").append($("<li>").append(winner));
    });
  }
});
