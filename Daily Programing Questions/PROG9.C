#include<stdio.h>
#include<conio.h>
#include<ctype.h>

void main(){
    char str[100], vowels[100], consonants[100];
    int i=0, vIndex=0, cIndex=0;
    clrscr();

    printf("Enter a string :");
    scanf("%s",&str);

    for(i=0; str[i]!='\0';i++){
      if(str[i] == 'a' || str[i] =='e' || str[i] == 'i' ||str[i]=='o' || str[i]=='u'|| str[i] == 'A' || str[i]=='E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
	vowels[vIndex++] = str[i];
      }
      else{
	consonants[cIndex++] =str[i];
      }
    }

    vowels[vIndex]='\0';
    consonants[cIndex] = '\0';

    printf("\nVowels : %s \n",vowels);
    printf("\nConsonants : %s \n",consonants);

    getch();
}