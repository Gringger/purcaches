$(function()
{
    var $product = $(".first");
    var $box = $(".bigleft");
    var $productright=$(".f1");
    var $left = $(".right1");
    var index = 0;
    function addItem(title) {
        var quantity = 1;
        var $noderight = $productright;
        var $node = $product;
        var $right1 =$noderight.clone();
        var $left3 = $node.clone();
        var $rightRemove = $right1;
        var $productNumber = $left3.find(".leftboxQuantity");
        $right1.find(".box1").text(title);
        $left3.find(".title-name").text(title);
        $left3.show();
        $right1.show();

        $left3.find(".button1").click(function () {
            if (quantity > 1) {
                quantity -= 1;
                $left3.find(".leftboxQuantity").text(quantity);
                $right1.find(".number1").text(quantity);
            }
        });
        $left3.find(".button2").click(function () {
            quantity += 1;
            $left3.find(".leftboxQuantity").text(quantity);
            $right1.find(".number1").text(quantity);

        });
        $left3.find(".buttonDelete").click(function () {
            $left3.remove();
            $rightRemove.remove();

        });
        $left3.find(".buttonBought").click(function () {
            $left3.addClass("is-bought");
            $noderight.addClass("is-bought");
            $right1.remove();
            $(".right2").append($right1);
        });
        $left3.find(".buttonUnBought").click(function () {
            $left3.removeClass("is-bought");
            $right1.remove();
            $left.append($right1);
        });
        var edit = $left3.find(".title-name");
        var newName = $left3.find(".new-name");
        edit.click(function () {

            edit.hide();
            newName.show();
            newName.val(title);
            newName.focus();
        });
        newName.focusout(function () {
            newName.hide();
            edit.show();
            title = newName.val();
            $left3.find(".title-name").text(title);
            $right1.find(".box1").text(title);
        });
        $box.append($left3);
        $left.append($right1);
        $left3.removeClass("first");
    };


    addItem("Сир");
    addItem("Помідори");
    addItem("Печиво");
    function className() {
        var name = 0;
        name++;
        return name;

 }


    var $new_input = $(".input");
    $(".button").click(function(){
        var new_name = $new_input.val();
        if(new_name.trim()){
            addItem(new_name);
            $new_input.val("");
            $new_input.focus();
        }
    });
});






