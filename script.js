function lable_create(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function break_create(){
    var ele=document.createElement("br")
    return ele;
}
   
function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var element=document.createElement(tagname);
    element.setAttribute(attr1name,attr1value)
    element.setAttribute(attr2name,attr2value);
    return element;
}

var firstname=lable_create("lable","for"," firstname"," Firstname")
var  firstname_break=break_create();

var  firstname_input=input_create("input","type"," firstname","id"," firstname")
 
var middlename=lable_create("lable","for"," middlename","Middlename")
var  middlename_break=break_create();
var  middlename_input=input_create("input","type"," middlename","id"," middlename")
var lastname=lable_create("lable","for"," lastname","Lastname")
var  lastname_break=break_create();
var  lastname_input=input_create("input","type"," lastname","id"," lastname")
var email=lable_create("lable","for","email","Email")
var email_break=break_create();
var email_input=input_create("input","type","email","id","email")
var password=lable_create("lable","for","password","Password")
var password_break=break_create();
var password_input=input_create("input","type","epassword","id","password")
document.body.append(firstname,firstname_break,firstname_input,break_create(),middlename,middlename_break,middlename_input,break_create(),lastname,lastname_break,lastname_input,break_create(),email,email_break,email_input,break_create(),password,password_break,password_input)




