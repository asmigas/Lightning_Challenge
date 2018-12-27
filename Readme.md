## This Lightning custom datepicker for Salesforce c:customDatePicker

#### This datepicker is a customisable of the datepicker that fit all your projects. 
#### See below to discover all customisable components.

> **Note:** This component uses Javascript without third-party frameworks and libraries but it using SLDS.


# API
   
### currentDate
 - The current date
`for example currentDate="2015-01-18"`

        
###  Format
 - date format displayed in datePicker
`for example format="MMM dd, YYYY"`
- default value "MMM dd, YYYY"

### Label
- set laber for datepicker

### Header
- It allows or denies display of a header with a full description of the date.
 - default header="true"

### Color
- This attribute set the color styles as the background and color
 - default bgcolor="rgb(194, 57, 52)" color="white"

###  Format day
- This attribute identifies the beginning of the week.
`Euro - starts from Monday, USA - starts from Sunday`
 - default formatDay="USA"



## Demos & Examples:

![0](https://user-images.githubusercontent.com/7148763/50470329-1c523b00-09c1-11e9-98cd-2abcb6d28888.png)
```
<c:customDatePicker aura:id="CDP01" currentDate="2015-01-18" format="MMM dd, YYYY" header="true" label="Custom DatePicker"/>
```
![1](https://user-images.githubusercontent.com/7148763/50470332-1cead180-09c1-11e9-93e0-566f6f421e0d.png)
![1 1](https://user-images.githubusercontent.com/7148763/50470330-1c523b00-09c1-11e9-9f3f-b96cf0b2b82f.png)
![1 2](https://user-images.githubusercontent.com/7148763/50470331-1cead180-09c1-11e9-9173-93943a4692ff.png)
```
<c:customDatePicker aura:id="CDP02" bgcolor="yellow" color="green" header="true"/>
```
![2](https://user-images.githubusercontent.com/7148763/50479707-ee80ec80-09e8-11e9-97d3-60a7685da37c.png)
```
<c:customDatePicker bgcolor="#2c97a7" currentDate="2018-11-25"  header="true" formatDay="Euro"/>
```
![3 2](https://user-images.githubusercontent.com/7148763/50479610-7d413980-09e8-11e9-9fb3-d3b629deb3e9.png)
![3 3](https://user-images.githubusercontent.com/7148763/50479609-7d413980-09e8-11e9-811a-6d73ecaaba64.png)
```
<c:customDatePicker aura:id="CDP04" animation="true" bgcolor="#16171529" currentDate="2018-12-18" color="#CC2EFA" header="true" formatDay="Euro"/>
```
![4](https://user-images.githubusercontent.com/7148763/50479620-8500de00-09e8-11e9-9f4f-4beb8998853b.png)
```
<c:customDatePicker aura:id="CDP05" formatDay="Euro" bgcolor="black" color="yellow" format="YYYY/MM, DD" header="false" />
```
![5](https://user-images.githubusercontent.com/7148763/50479628-892cfb80-09e8-11e9-9de5-e733d9e15713.png)
![5 1](https://user-images.githubusercontent.com/7148763/50479626-88946500-09e8-11e9-819d-87527d4188e6.png)
![5 2](https://user-images.githubusercontent.com/7148763/50479627-88946500-09e8-11e9-8f5d-d364d5188905.png)
