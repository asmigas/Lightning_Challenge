
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

###  Animation
- This attribute enable or disable animation.
`animation = "true"`
 - default animation = "false"

###  EnablePicker
- This attribute enable or disable datePicker.
`enablePicker = "true"`
 - default enablePicker = "true"

## new Version 2.0:
 **What's new?** 

 - Added mobile datePicker version (custom modal window)
 - improved animation 
 - improved code and checked mistakes in the component (fully dynamic component)
 - Link Package Version Custom Datepicker Lightning Challenge, v2.0 [https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6F0000045VIy](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6F0000045VIy&isdtp=p1)

## Demos & Examples:
#### mobile version (Salesforce 1):
```
<c:customDatePicker aura:id="CDP04" animation="true" bgcolor="#16171529" currentDate="2019-01-05" color="#CC2EFA" header="true" formatDay="Euro"/>
```
![m11](https://user-images.githubusercontent.com/7148763/50774135-b78dbf00-12a3-11e9-8a70-72244898d4a5.png)
```
<c:customDatePicker bgcolor="#2c97a7" currentDate="2019-01-01"  header="true" formatDay="Euro"/>
```
![m12](https://user-images.githubusercontent.com/7148763/50774422-6c27e080-12a4-11e9-995b-cf62cdc6e6fd.png)
![m4](https://user-images.githubusercontent.com/7148763/50774671-16076d00-12a5-11e9-927e-f08379bb1f26.png)

####  PC version:
```
<c:customDatePicker aura:id="CDP01" currentDate="2019-01-18" format="MMM dd, YYYY" header="true" label="Custom DatePicker"/>
```
![p1](https://user-images.githubusercontent.com/7148763/50774495-a4c7ba00-12a4-11e9-972e-5f96e1f1858d.png)
![p2](https://user-images.githubusercontent.com/7148763/50774496-a4c7ba00-12a4-11e9-8480-f572ea837bab.png)
![p3](https://user-images.githubusercontent.com/7148763/50774498-a5605080-12a4-11e9-8f6a-8850e841b131.png)
```
<c:customDatePicker currentDate="2019-01-19" format="MMM dd, YYYY"  enablePicker="false" label="False enable DatePicker"/>
```
![p22](https://user-images.githubusercontent.com/7148763/50774692-228bc580-12a5-11e9-9b8c-08b44d5967eb.png)
```
<c:customDatePicker bgcolor="yellow" color="green" header="true" enablePicker="true"/>
```
![p33](https://user-images.githubusercontent.com/7148763/50774706-2ae40080-12a5-11e9-9db2-4f0180d3ca80.png)
```
<c:customDatePicker aura:id="CDP04" animation="true" bgcolor="#16171529" currentDate="2019-01-05" color="#CC2EFA" header="true" formatDay="Euro"/>
```
![p44](https://user-images.githubusercontent.com/7148763/50774539-bd37d480-12a4-11e9-8b53-c227800f4206.png)
```
<c:customDatePicker formatDay="Euro" bgcolor="black" color="yellow" format="YYYY/MM, DD" header="false" />
```
![p55](https://user-images.githubusercontent.com/7148763/50774718-36cfc280-12a5-11e9-83f4-4edb80ceffb8.png)
![p56](https://user-images.githubusercontent.com/7148763/50774719-37685900-12a5-11e9-94d1-91d0b0706afc.png)
![p57](https://user-images.githubusercontent.com/7148763/50774720-37685900-12a5-11e9-9385-c2f5db8d80cf.png)
```
<c:customDatePicker bgcolor="#2c97a7" currentDate="2019-01-01"  header="true" formatDay="Euro"/>
```
![p66](https://user-images.githubusercontent.com/7148763/50774595-e5273800-12a4-11e9-8b62-6302bbd9efea.png)
![p67](https://user-images.githubusercontent.com/7148763/50774596-e5273800-12a4-11e9-90c0-7b508ba74989.png)
![p68](https://user-images.githubusercontent.com/7148763/50774594-e48ea180-12a4-11e9-9734-740165103a52.png)
