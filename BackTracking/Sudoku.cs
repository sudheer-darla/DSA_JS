using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Text;
using System.Linq;
// in this you don't have to modify the given input 
// you just have to return the new list of string which is solution of above sudoku.
class Solution {
    int n;
    List < List < char >> A;
    HashSet < char > set;
    public List < string > solve(List < string > a) {
        A = new List < List < char >> ();
        n = a.Count();
        foreach(string x in a) {
            List < char > temp = new List < char > ();
            for (int i = 0; i < x.Length; i++)
                temp.Add(x[i]);
            A.Add(temp);
        }
        set = new HashSet < char > ();
        backtrack(0, 0);
        List < string > ans = new List < string > ();
        foreach(List < char > x in A) {
            StringBuilder t = new StringBuilder();
            foreach(char y in x) {
                t.Append(y);
            }
            ans.Add(t.ToString());
        }
        return ans;
    }
    public bool backtrack(int row, int col) {
        if (row == n)
            return true;
        char c = A[row][col];
        int rr = row, cc = col + 1;
        if (cc == n) {
            rr++;
            cc = 0;
        }
        if (c == '.') {
            for (char ch = '1'; ch <= '9'; ch++) {
                // Include c in the solution 
                A[row][col] = ch;
                if (isValid(row, col)) {
                    bool status = backtrack(rr, cc);
                    if (status)
                        return true;
                }
                // Reset
                A[row][col] = '.';
            }
        } else {
            return backtrack(rr, cc);
        }
        return false;
    }
    public bool isValid(int row, int col) {
        set.Clear();
        char c;
        for (int i = 0; i < n; i++) {
            c = A[row][i];
            if (set.Contains(c))
                return false;
            if (c != '.')
                set.Add(c);
        }
        set.Clear();
        for (int i = 0; i < n; i++) {
            c = A[i][col];
            if (set.Contains(c))
                return false;
            if (c != '.')
                set.Add(c);
        }
        int sRow = (row / 3) * 3;
        int sCol = (col / 3) * 3;
        set.Clear();
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                int rr = sRow + i;
                int cc = sCol + j;
                c = A[rr][cc];
                if (set.Contains(c))
                    return false;
                if (c != '.')
                    set.Add(c);
            }
        }
        return true;
    }
}