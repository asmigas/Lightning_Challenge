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

![0](/uploads/fcb6c59d6d2b09aa51d36f476dcc1b06/0.png)
```
<c:customDatePicker aura:id="CDP01" currentDate="2015-01-18" format="MMM dd, YYYY" header="true" label="Custom DatePicker"/>
```
![1](/uploads/7ff1cfbbdaa26e0d6e5fb65773242e77/1.png)
![1.1](/uploads/9fa9e0435292deb4ba6f019b75725a9c/1.1.png)
![1.2](/uploads/1b5bcde22e671573947484dcef0e3335/1.2.png)
```
<c:customDatePicker aura:id="CDP02" bgcolor="yellow" color="green" header="true"/>
```
![2](/uploads/66a3a0368a716bad22d7a4ee5e72c2f7/2.png)
```
<c:customDatePicker bgcolor="#2c97a7" currentDate="2018-11-25"  header="true" formatDay="Euro"/>
```
![3.2](/uploads/f3f21fdecb16b980b5daed8f0b70c620/3.2.png)
```
<c:customDatePicker aura:id="CDP04" animation="true" bgcolor="#16171529" currentDate="2018-12-18" color="#CC2EFA" header="true" formatDay="Euro"/>
```
![4](/uploads/a91dbc3307de1084df5d2d4a35b628de/4.png)
```
<c:customDatePicker aura:id="CDP05" formatDay="Euro" bgcolor="black" color="yellow" format="YYYY/MM, DD" header="false" />
```
![5](/uploads/258059b653ac9c82549f4d03b786ae59/5.png)
![5.1](/uploads/e7a63de65c87aa809333d61ad992852d/5.1.png)
![5.2](/uploads/fb51891be8ca5fb0ea6956f4deccb1ad/5.2.png)