// import Backpack from "./backpack.js";
import Node from "./note-item.js";
import readTextFile from "./loadFile.js";

$(document).ready(function () {
  let number_note = readTextFile("numberNote.txt");

  for (let i = 0; i < number_note; i++) {
    $(".main-content__notes").append(`
        <div class="col-md-6 card-item">
        <div class="note-container">
        <div class="note__header">
        <h3></h3>
        <span></span>
        </div>
        <div class="note__content">
        <p></p>
        </div>
        </div>
        </div>
    `);
  }

  const arrNote = $(".note-container");
  arrNote.each(function (i) {
    var id = i + 1;
    let folder = "note" + id;
    console.log(folder);
    $(this).find(".note__header h3").load(`./${folder}/noteTitle.txt`);
    $(this).find(".note__header span").load(`./${folder}/noteTime.txt`);
    $(this).find(".note__content p").load(`./${folder}/note.txt`);
  });

  $(".search-product-container__input, .search-product-container__btn").on(
    "keyup click",
    function () {
      var value = $(this).val().toLowerCase();

      $(".main-content__notes")
        .children()
        .filter(function () {
          $(this).toggle(
            $(this).find("h3").text().toLowerCase().indexOf(value) > -1
          );
        });
    }
  );

  $("textarea").on("keypress", function (e) {
    console.log($(this).height());
    autosize($(this));
  });

  $(".show-input-form-btn").html("Show note form");
  $(".show-input-form-btn").click(function () {
    if ($(this).html().toLowerCase().indexOf("show") != -1) {
      $(this).html("Hide note form");
    } else {
      $(this).html("Show note form");
    }
  });

  $("#inputForm1 .add-note-btn").click(function () {
    console.log("clicked");
    let title_node_element = $("#inputForm1 .input-container__title");
    let content_node_element = $("#inputForm1 .input-container__content");
    console.log(content_node_element.val());
    let dn = Date.now();

    console.log(dn);

    if (title_node_element.val() == "" || content_node_element.val() == "") {
    } else {
      const new_note = new Node(
        "Node " + number_note,
        "" + title_node_element.val(),
        "default",
        dn,
        "" + content_node_element.val()
      );
      $("main .main-content .main-content__notes").append(new_note.display());
      console.log($("main .main-content .main-content__notes").html());
    }
  });
});
