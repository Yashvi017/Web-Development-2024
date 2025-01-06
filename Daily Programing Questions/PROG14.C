#include <stdio.h>
#include <conio.h>

void main() {
    int arr[] = {2, 3, 5, 4, 5, 3, 4};
    int n = 7;  
    int i, j;
    int unique = -1; 

    clrscr(); 

    for (i = 0; i < n; i++) {
        int isUnique = 1;

        for (j = 0; j < n; j++) {
            if (i != j && arr[i] == arr[j]) {
                isUnique = 0;  
                break;
            }
        }

        if (isUnique) {
            unique = arr[i];
            break; 
        }
    }

    printf("Unique Element: %d\n", unique);

    getch();
}
