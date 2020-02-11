//let line='2';
 let line=readline();
readLine(line);

function readLine(line){
    line+=' ';
    let s='', ar=[], k=0;
    for (let index = 0; index < line.length; index++) {
        if(line[index]!=' '){
            s+=line[index];
        }
        else{
            k++;
            ar[k]=parseInt(s);
            s='';
        }
    }
    return ans(ar[1],ar[2],ar[3]);
}

function ans(a,b,c){
    let s;
    s=a+b+c;
    s=s/2;
    //console.log(s.toFixed(2));
   print(s.toFixed(2));
}
