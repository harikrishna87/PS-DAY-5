function occurance(arr) {
    let count = {};
    
    for(i = 0; i < arr.length; i++) {
        if(count[arr[i]]) {
            count[arr[i]]++
        }
        else {
            count[arr[i]] = 1;
        }
    }
    return count
}
const array = [1,2,3,4,3,2,1,5,6,7,8,5,6,7,9,0,4,3,5,6,3,0,5];
const output = occurance(array);
console.log(output);

function consonents(arr) {
    let vowels_words = 'aeiou'; 
        let vowelcount = {};
        
        for(i=0; i < arr.length; i++) {
            let converted_count = arr[i].toLowerCase();
            let num = 0;
            for(j = 0; j < converted_count.length; j++) {
                for(k = 0; k < vowels_words.length; k++) {
                    if(converted_count[j] === vowels_words[k]) {
                        num++
                    }
                }
            }
            vowelcount[arr[i]] = num;
        }
        return vowelcount
    }
    
    
    const array = ["hari", "charan", "manikanta"];
    const output = consonents(array);
    console.log(output);
    
    
    function consonents(arr) {
    let vowels_words = 'aeiou'; 
    let consonent_words = 'bcdfghjklmnpqrstvwxyz'
        let vowelcount = {};
        let constcount = {}
        
        for(i=0; i < arr.length; i++) {
            let converted_count = arr[i].toLowerCase();
            let count = 0;
            let num = 0;
            for(j = 0; j < converted_count.length; j++) {
                for(k = 0; k < vowels_words.length; k++) {
                    if(converted_count[j] === vowels_words[k]) {
                        num++
                    }
                }
                for (l = 0; l < consonent_words.length; l++) {
                    if(converted_count[i] === consonent_words[l]) {
                        count++
                    }
                }
            }
            vowelcount[arr[i]] = num;
            constcount[arr[i]] = count;
        }
        return {vowelcount, constcount}
    }
    
    
    const array1 = ["hari", "charan", "manikanta"];
    const output1 = consonents(array1);
    console.log(output1);
    