function findRepeatedDnaSequences(s: string): string[] {
    if (s.length < 10) {
          return [];
      }
  
      const substringCounts: Record<string, number> = {};
      const result: string[] = [];
  
      for (let i = 0; i <= s.length - 10; i++) {
          const substring = s.substring(i, i + 10);
  
          if (substringCounts[substring]) {
              substringCounts[substring]++;
          } else {
              substringCounts[substring] = 1;
          }
  
          if (substringCounts[substring] === 2) {
              result.push(substring);
          }
      }
  
      return result;
  };
  