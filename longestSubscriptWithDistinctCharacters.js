function methodName(str) {
    str = String(str);
    let charMap = {};
    let winStart = 0;
    let startIndex = -Infinity;
    let endIndex = -Infinity;
    let maxLength = 0;
    for (let winEnd = 0; winEnd < str.length; winEnd++) {
        if (charMap[str[winEnd]]) {
            charMap[str[winEnd]] += 1;
        }
        else {
            charMap[str[winEnd]] = 1;
        }

        while (Object.values(charMap).some(x => x > 1)) {
            charMap[str[winStart]] -= 1;

            if (!charMap[str[winStart]]) {
                delete charMap[str[winStart]];
            }
            winStart++;
        }
        maxLength = Math.max(maxLength, winEnd - winStart + 1);

        if (winEnd - winStart + 1 >= maxLength) {
            startIndex = winStart;
            endIndex = winEnd;
        }
    }

    console.log(maxLength);
    console.log(str.substring(startIndex, endIndex + 1));
}

methodName('aabccbb');
methodName('abbbb');
methodName('abccde');