number=input("enter the number:")
b=' '
i=0
while i<len(number):
    b+=number[i]
    j=1
    while j<=len(number)-(i+1):
        b+="0"
        j+=1
    if i==(len(number)-1):
        break
    else: 
        b+='+'
    i+=1
print(b)