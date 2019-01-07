
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
`datePicker = "true"`
 - default datePicker = "true"

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
```
<c:customDatePicker bgcolor="#2c97a7" currentDate="2018-11-25"  header="true" formatDay="Euro"/>
```
![m4](/uploads/4c343e4c5a78fbf123d1e88ef7ed275f/m4.png)

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
![p22](/uploads/85a3f1afc5081fed4e0f120fc8715562/p22.png)
```
<c:customDatePicker bgcolor="yellow" color="green" header="true" enablePicker="true"/>
```
![p33](/uploads/8b5c0aa4fd6a3acbe3b069b2c33f42c7/p33.png)
```
<c:customDatePicker aura:id="CDP04" animation="true" bgcolor="#16171529" currentDate="2019-01-05" color="#CC2EFA" header="true" formatDay="Euro"/>
```
![p44](https://user-images.githubusercontent.com/7148763/50774539-bd37d480-12a4-11e9-8b53-c227800f4206.png)
```
<c:customDatePicker formatDay="Euro" bgcolor="black" color="yellow" format="YYYY/MM, DD" header="false" />
```
![p55](/uploads/4cbd4923e82852efc18041d146aba187/p55.png)
![p56](/uploads/616c787da3ac32bbae883d9ef9c50445/p56.png)
![p57](/uploads/60da6a6b3f46b3949565c95e6eb80fd5/p57.png)
```
<c:customDatePicker bgcolor="#2c97a7" currentDate="2019-01-01"  header="true" formatDay="Euro"/>
```
![p66](https://user-images.githubusercontent.com/7148763/50774595-e5273800-12a4-11e9-8b62-6302bbd9efea.png)
![p67](https://user-images.githubusercontent.com/7148763/50774596-e5273800-12a4-11e9-90c0-7b508ba74989.png)
![p68](https://user-images.githubusercontent.com/7148763/50774594-e48ea180-12a4-11e9-9734-740165103a52.png)
