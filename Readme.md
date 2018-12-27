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
![2](https://user-images.githubusercontent.com/7148763/50470333-1cead180-09c1-11e9-87c8-27d0ef2e84d0.png)
```
<c:customDatePicker bgcolor="#2c97a7" currentDate="2018-11-25"  header="true" formatDay="Euro"/>
```
![3 2](https://user-images.githubusercontent.com/7148763/50470334-1cead180-09c1-11e9-92db-127bb8d86290.png)
```
<c:customDatePicker aura:id="CDP04" animation="true" bgcolor="#16171529" currentDate="2018-12-18" color="#CC2EFA" header="true" formatDay="Euro"/>
```
![4](https://user-images.githubusercontent.com/7148763/50470335-1d836800-09c1-11e9-97a6-4edbebba3d80.png)
```
<c:customDatePicker aura:id="CDP05" formatDay="Euro" bgcolor="black" color="yellow" format="YYYY/MM, DD" header="false" />
```
![5](https://user-images.githubusercontent.com/7148763/50470340-1d836800-09c1-11e9-8603-bd6f84d74317.png)
![5 1](https://user-images.githubusercontent.com/7148763/50470336-1d836800-09c1-11e9-9c0a-5d4ee14e0480.png)
![5 2](https://user-images.githubusercontent.com/7148763/50470339-1d836800-09c1-11e9-8644-418515888ad5.png)
