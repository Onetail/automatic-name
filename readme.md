# user-name

## Feature
#### Create new name 
```createNewName(language1, language2 ...) ```

language arguments
* taiwan
* chinese
* english

> It will be selected a random language without any arguments.

![](https://i.imgur.com/m1TwiE0.png)


#### Get firstname and lastname middle spacing 
``` getSpacing() ```
  
#### Set firstname and lastname middle spacing 
``` setSpacing(string) ``` 

#### Get tag string 
``` getTag() ```
  
#### Set tag string 
``` setTag(string) ``` 


#### Get username
``` getUsername() ```
    
#### Get fullname
``` getFullName(option) ```

option argument
* option [color=#2a1377](mean: 'spacing', type: 'string')


#### Get username with Tag
``` getUsernameWithTag(type [,options]) ```
#### Get fullname with Tag
``` getFullnameWithTag(type [,options]) ```
type argument
* type [color=#2a1fff](mean: 'random type', type: 'string')
    * number (mean: 'random number')
    * timestamp (mean: 'Date.now()')
    * v* (mean: 'uuid extension for uuid library: [uuid](https://www.npmjs.com/package/uuid)')

params arguments
* if type = number, params argument 1 is random count
    ![](https://i.imgur.com/KoDokNe.png)

    > default 4
* uuid extension arguments


![](https://i.imgur.com/V2fpjR3.png)
