#include <stdio.h>
#include <conio.h>

void main() {
    int arr1[] = {1, 2, 3, 4, 5};
    int arr2[] = {4, 5, 6, 7, 8};
    int n1 = 5;  // Size of the first array
    int n2 = 5;  // Size of the second array
    int i, j;

    clrscr();  // Clear screen (for Turbo C)

    printf("Common Elements: ");
    
    // Loop through each element of the first array
    for (i = 0; i < n1; i++) {
        // Compare with each element of the second array
        for (j = 0; j < n2; j++) {
            if (arr1[i] == arr2[j]) {  // If element is common
                printf("%d ", arr1[i]);
                break;  // Once a common element is found, move to next element of arr1
            }
        }
    }
    
    printf("\n");
    getch();  // Wait for key press (for Turbo C)
}