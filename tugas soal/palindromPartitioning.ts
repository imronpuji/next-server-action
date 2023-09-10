function partition(s: string): string[][] {
    const isPalindrome = (str: string): boolean => {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    const result: string[][] = [];

    const backtrack = (startIndex: number, currentPartition: string[]) => {
        if (startIndex === s.length) {
            result.push([...currentPartition]);
            return;
        }

        for (let endIndex = startIndex + 1; endIndex <= s.length; endIndex++) {
            const substring = s.substring(startIndex, endIndex);
            if (isPalindrome(substring)) {
                currentPartition.push(substring);
                backtrack(endIndex, currentPartition);
                currentPartition.pop();
            }
        }
    };

    backtrack(0, []);

    return result;
}
