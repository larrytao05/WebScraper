
with open("results.txt") as f:
    lines = f.readlines()
    print(len(lines))
    for line in lines:
        print(line)
        '''
        print("got here")
        if "price" in line:
            price = line.split(":")[1]
            price.replace(" ", "").replace(",", "").replace("'", "")
            f.write(price)
        elif "name" in line:
            name = line.split(":")[1]
            name.replace(" ", "").replace(",", "").replace("'", "")
            f.write(name)
        '''