// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var isPalindrome = (x) =>{
    y = x.toString().split('');
    let n = y.length -1;
    let i=0;
    while(i<n)
    {
        if(y[i] == y[n])
        {
        i++;
        n--;
        }
        else{
            return(false)
        }
    }
    return(true)
};
let x =121
isPalindrome(x)