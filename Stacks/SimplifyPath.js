/*
Given a string A representing an absolute path for a file (Unix-style).

Return the string A after simplifying the absolute path.

Note:

In Unix-style file system:
A period '.' refers to the current directory.
A double period '..' refers to the directory up a level.
Any multiple consecutive slashes '//' are treated as a single slash '/'.
In Simplified Absolute path:
The path starts with a single slash '/'.
Any two directories are separated by a single slash '/'.
The path doesn't end with trailing slashes '/'.
The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
The path will not have whitespace characters.


Problem Constraints
1 <= |A| <= 106


Input Format
The only argument given is string A.


Output Format
Return a string denoting the simplified absolute path for a file (Unix-style).
*/

function simplifyPath(path) {
  {
    const stack = [];
    const parts = path.split('/');

    for (const part of parts) {
      if (part === '' || part === '.') {
        // Skip empty parts and current directory references
        continue;
      } else if (part === '..') {
        // Go up one level if possible
        if (stack.length > 0) {
          stack.pop();
        }
      } else {
        // Add valid directory to the stack
        stack.push(part);
      }
    }

    // Construct simplified path
    const simplifiedPath = '/' + stack.join('/');
    return simplifiedPath;
  }
}

console.log(simplifyPath('/a/./b/../../c/'));
console.log(simplifyPath('/home/'));
