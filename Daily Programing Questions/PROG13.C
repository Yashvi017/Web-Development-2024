#include <stdio.h>
#include <conio.h>

void main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;  
    int k = 2;  
    int i;

    clrscr(); 
    
    k = k % n;  // Normalize k if k > n

    // Print rotated array
    printf("Rotated Array: ");
    for (i = n - k; i < n; i++) {
        printf("%d ", arr[i]);  
    }
    for (i = 0; i < n - k; i++) {
        printf("%d ", arr[i]); 
    }
    printf("\n");

    getch();  
}
