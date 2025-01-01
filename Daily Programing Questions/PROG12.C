#include <stdio.h>
#include <conio.h>  

void main() {
    clrscr();
    char ch = 'Z';  

    // Loop for 3 lines
    for (int i = 3; i >= 1; i--) {
        for (int j = 1; j <= i; j++) {
            printf("%c", ch);
        }
        printf("\n");
        ch--;  
    }

    getch();  
}
