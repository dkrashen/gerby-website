$('#chapters').click(function(){
  $(".chapter").slideToggle();
})

function clickmaker(label){
  return function(){
    $(".content#"+label).slideToggle(1000);
  }
}

function buttonmaker(label){
  $button = $("<button>", 
    {"type":"button", "id": label, "class": "button"});
  $button.click(clickmaker(label)); 
  return $button;
}

function addContent(data){
  for (i in data.tags){
    var current = data.tags[i];
    $entry = $('<div>', {"class": current.type});
    $entry.append(current.label + '(' + current.type + ')');
    if (current.type == "chapter"){
      $('#thelist').append($entry);
      $content = 
        $("<div>", {"id": current.label, "class":
        "content"}).append(current.html).hide();
      $entry.append(buttonmaker(current.label));
      $entry.append($content);
    }
  }
}

$.ajax({
  type:"GET",
  url: "http://127.0.0.1:5000/api", 
  success: function(data){ addContent(data); },
  dataType: "jsonp"
})

