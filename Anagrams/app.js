

const findAnagrams = function(s, p) {
    let res = new Array()
    let sLen = s.length, pLen = p.length
    for(let i = 0; i< sLen; i++) {
        if(p.includes(s[i])) {
            let temp = p, cur = true
            for(let j = i; j < i + pLen; j++) {
                if(!temp.includes(s[j])) {
                    cur = false
                    break
                } else {
                    let tempIdx = temp.indexOf(s[j])
                    temp = temp.slice(0, tempIdx) + temp.slice(tempIdx + 1)
                }
            }
            if(cur) {
                res.push(i)
            }
        }
    }
    return res
};

function answer(word , f = false) {
    if(f)
        return 24;
}
answer();

module.exports = answer;
