const process = (list) => {

    if(!list.length) return "";
    let prefix = "";

    for(let i =0; i<list.length; i++) {
        if(list[i].length <=200 && isLowerCaseEnglish(list[i])) {
            prefix = list[i];
        }
    }
    let cnt = 0;
    for(let i =0; i<list.length && i <=200; i++) {

        if(list[i].length <=200 && isLowerCaseEnglish(list[i])) {
            cnt++;
            let j = 0;
            for (; j <= prefix.length && j < list[i].length; j++) {
                if (prefix[j] !== list[i][j]) {
                    break; 
                }
            }
            //console.log(j);
            prefix = prefix.substring(0, j); 
            if (prefix === "") return ""; 
        }
    }
    //console.log(cnt);
    if(cnt <= 1) return "";

  return prefix;
  };

  function isLowerCaseEnglish(str) {
    //console.log(str);
    //console.log(/^[a-z]+$/.test(str));
    return /^[a-z]+$/.test(str);
}

  const list = ['flwersss','flower', 'flowoor', 'kkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkkfl1owkkkkkkkkkkkkkkkk'];

  console.log('output :', process(list));