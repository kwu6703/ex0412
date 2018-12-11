/**************************************
 *  Author:         Kaixin Wu
 *  Date:           10/14/2018
 *  Description:    Ex4.12, pg. 192 of Sebesta
 * 
 * 
 *************************************/   
var name1 = "Wu, Kaixin";
var name2 = "Marks, Aaron L";
var name3 = "Etheridge, Melissa";
var name4 = "Murphy, Dean H";

var user_name = prompt("Enter a name:");

var name1_test = test_name(name1);
var name2_test = test_name(name2);
var name3_test = test_name(name3);

document.write(name1_test + '<br />' + name2_test + '<br />' + name3_test+ '<br />');
document.write(test_name(name4));
alert(test_name(user_name));

function test_name(name) {
    var test = name.search(/^[A-Z][a-z,]+\s[A-Z][a-z,]+\s[A-Z]/);
    if(test==0) {
        return name + ' was in the correct format.';
    }
    else {
        return name + ' was NOT in the correct format.';
    }
}
