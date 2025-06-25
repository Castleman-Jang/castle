
selectV=()=>{
    let selectall=document.getElementById('selectall');
    const select = document.querySelectorAll("input[name='select']:checked");
    console.log(select.length);
    if(select.length=='12'){
        selectall.checked = true;
    }else{
        selectall.checked = false;
    }
}
selectall=()=>{
    const selectall = document.querySelector('#selectall');
    console.log(selectall.checked);
    let select = document.getElementsByName('select');
    console.log(select[1].checked);
    if(selectall.checked){
      for(i=0;i<select.length;i++){
        select[i].checked = true;
      }
    }else{
        for(i=0;i<select.length;i++){
        select[i].checked = false;
      }
    }
    select.forEach((Number,i)=>{
        console.log(Number.checked);
    });
    select.forEach((Number,i)=>{
        console.log(select[i].checked);
    });
}

result=()=>{
    const select =  document.querySelectorAll('input[name="select"]:checked');
    const selectall = document.querySelector('#selectall');
    let result = document.getElementById('resultbox');
    console.log(select);
    result.innerHTML = "";
    select.forEach((select, i)=>{
        result.innerHTML += select.value + ' ';
        select.checked = false;
        selectall.checked = false;
    })
}