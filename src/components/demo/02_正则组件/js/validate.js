 //todo  eg:  0. 引入：
 //todo          import {validateUtils,validateItems} from 'imports-loader?$=jquery!../../../static/js/validate.js'
 //todo       1. 需要验证的节点同级添加： <div class="alert-info"><span></span></div>
 //todo       2. 添加css样式：
 // .alert-info{
 //   color: #f0714d;
 //   position: relative;
 //   span{
 //     position: absolute;
 //     top: 0px;
 //     left: 0px;
 //     height: 24px;
 //     line-height: 24px;
 //     text-align: right;
 //   }
 // }
 //todo       3. 需要验证的节点添加 id 属性
 //todo       4. 在需要验证的地方添加js代码：
 //todo           let boolean= validateItems("id","isNotEmpty,isSelect",validateUtils,str,5,50);
                                            //id , 需要验证的规则 , validateUtils , 需要验证的字符串 , minlength , maxlength
 //todo       5. 判断 boolean 为 true 则 return 为 false 则继续。


export const  validateUtils={
    isNotEmpty:function(str,item,alertInfo){
        let $alert=$("#"+item).next(".alert-info").find("span");
        if(str.replace(/(^\s*)|(\s*$)/g, "").length!=0){
            $alert.text("");
            return true;
        }else{
            $alert.text(alertInfo+"不能为空");
            //$alert.text("请输入内容");
            return false;
        }
    },
    isNotUpload:function(str,item,alertInfo){
      let $alert=$("#"+item).next(".alert-info").find("span");
      if(str.replace(/(^\s*)|(\s*$)/g, "").length!=0){
        $alert.text("");
        return true;
      }else{
        $alert.text(alertInfo+"不能为空");
        //$alert.text("请选择文件");
        return false;
      }
    },
    isSelect:function(str,item,alertInfo){
        let $alert=$("#"+item).next(".alert-info").find("span");
        if(str.replace(/(^\s*)|(\s*$)/g, "").length!=0&&str.replace(/(^\s*)|(\s*$)/g, "")!="请选择"){
            $alert.text("");
            return true;
        }else{
            $alert.text(alertInfo+"不能为空");
            //$alert.text("请选择一项");
            return false;
        }

    },
    isLength:function(str,minLength,maxLength,item,alertInfo){
        if(str.replace(/(^\s*)|(\s*$)/g, "").length<=maxLength&&str.replace(/(^\s*)|(\s*$)/g, "").length>=minLength){
            return true;
        }else{
            let $alert=$("#"+item).next(".alert-info").find("span");
            $alert.text(alertInfo+"必须≥"+minLength+"个字符≤"+maxLength+"个字符");
            //$alert.text("输入的长度有误，最多"+maxLength+"个字");
            return false;
        }
    },
  //   isNotIllegitmacy:function(str,item,alertInfo){
  //   let re = /[~#^$@%&!*()<>:;'"{}【】  ]/gi;
  //   if (re.test(str)) {
  //       let $alert=$("#"+item).next(".alert-info").find("span");
  //       $alert.text(alertInfo+"不能为空");
  //     console.log(alertInfo+"不能为空")
  //     return false;
  //   }else{
  //       return true;
  //   }
  // },
    isOnlyNumLetter:function(str,item,alertInfo) {
      let re = /^[a-zA-Z0-9_]*$/g;
      let $alert=$("#"+item).next(".alert-info").find("span");
      if (re.test(str)) {
        console.log("aaa")
        return true;
      }else{
        $alert.text(alertInfo+"只能输入字母数字下划线");
        //$alert.text("输入的格式有误，不能包含特殊字符");
        return false;
      }
    }
}
export const validateItems=function(item,validateRules,validateObject,str,minLength,maxLength,alertInfo){
    let rulesArray=new Array();
    rulesArray=validateRules.split(",");
    for(let items in rulesArray){
        for(let property in  validateObject){
            if(property==rulesArray[items]){
                if(property=="isLength"){
                    let validateLengthResult=validateObject[property](str,minLength,maxLength,item,alertInfo);
                     if(validateLengthResult){
                        continue;
                     }else{
                        return true;
                     }
                }else{
                  let validateResult=validateObject[property](str,item,alertInfo)
                    if(validateResult){
                        continue;
                    }else{
                        return true;
                    }
                }
            }
        }
    }

}
