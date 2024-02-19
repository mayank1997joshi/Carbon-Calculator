import React, { useState } from 'react';
import commonUtilities from '../utilities.js';
import Typography from '../Elements/Typography';
import Button from '../Elements/Button';
import RowContainer from '../Elements/RowContainer';
import Box from '../Elements/Box';
import Label from '../Elements/Label';
import Input from '../Elements/Input';
import ColumnContainer from '../Elements/ColumnContainer';
import Image from '../Elements/Image';
import axios from 'axios';

export default function FormLayout1() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    website: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  
    if (name === 'email') {
      validateEmail(value);
    } else if (name === 'phoneNumber') {
      validatePhoneNumber(value);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    Object.keys(inputs).forEach((key) => {
      if (!inputs[key]) {
        validationErrors[key] = `${key} is required`;
      }
    });
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      const headers = { "Content-Type": "application/json" };
      const response = await axios.post('http://127.0.0.1:8080/v1/getemissioninfo', inputs, {headers,mode: "cors",});
      console.log(response.data);
    }
  };
  
  const validateEmail = (email) => {
      const isEmailValid = email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      if (!isEmailValid) {
        errors['phoneNumber'] = 'Please enter a valid valid (a@b.com)'
      }
  };
  
  const validatePhoneNumber = (phoneNumber) => {
    if (!Number.isNaN(phoneNumber) || phoneNumber.length > 10) {
      errors['phoneNumber'] = 'Please enter a 10-digit phone number'
    }
  };
  

  return (
    <Box
      utilities={commonUtilities.mainparent}
      className="font-rubik rounded-[12px 0px] max-w-[700px] p-[10px] md:font-rubik md:rounded-[12px 0px] md:max-w-[700px] md:pt-[20px] md:pr-[30px] md:pb-[0px] md:pl-[30px] lg:font-rubik lg:rounded-[12px 0px] lg:max-w-[700px]">
      <Box className="flex py-[24px] px-[0px] w-[100%] justify-between flex-col gap-[20px] md:flex md:py-[24px] md:px-[0px] md:w-[100%] md:justify-between lg:flex lg:py-[24px] lg:px-[0px] lg:w-[100%] lg:justify-between lg:flex-row">
        <Typography
          className="whitespace-no-wrap text-[25px] md:whitespace-no-wrap md:text-[28px] lg:whitespace-no-wrap"
          variantType="h2">
          Carbon Calculator
        </Typography>
      </Box>
      <ColumnContainer
        className="justify-center items-center gap-y-[15px] md:justify-center md:items-center lg:justify-center lg:items-center"
        gap="35px">
        <ColumnContainer
          className="w-[100%] gap-y-[10px] md:w-[100%] lg:w-[100%]"
          gap="15px">
          <ColumnContainer
            className="w-[100%] md:w-[100%] lg:w-[100%]"
            gap="6px">
            <RowContainer
              className="w-[100%] justify-between md:w-[100%] md:justify-between lg:w-[100%] lg:justify-between"
              for="input1"
              gap="0px">
              <Label
                variant="profile-label"
                className="font-[600] md:font-[600] lg:font-[600]"
                name="label"
                htmlFor="name2">
                Name
              </Label>
            </RowContainer>
            <Input
              variant="profile-input"
              className="text-[13px]"
              placeholder="Enter text"
              id="name2"
              type="email"
              name="name"
              onChange={handleChange}></Input>
          </ColumnContainer>
        </ColumnContainer>

        <RowContainer className="items-center w-[100%] gap-[10px] md:items-center md:w-[100%] lg:items-center lg:w-[100%]"
          gap="20px">
          <ColumnContainer
            className="items-start w-[100%] md:items-start md:w-[100%] lg:items-start lg:w-[100%]"
            >
            <ColumnContainer
              className="items-start text-[15px] w-[100%] gap-y-[5px] md:items-start md:text-[15px] lg:items-start lg:text-[15px] lg:w-[100%]"
             >
              <Label
                variant="profile-label"
                for="email"
                name="label"
                htmlFor="email">
                Email
              </Label>
              <Box
                variant="profileicon-input"
                className="w-[100%] md:w-[50%] lg:w-[100%]">
                <Image
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NjcsNzZINDVDMjAuMTM3LDc2LDAsOTYuMjYyLDAsMTIxdjI3MGMwLDI0Ljg4NSwyMC4yODUsNDUsNDUsNDVoNDIyYzI0LjY1NSwwLDQ1LTIwLjAzLDQ1LTQ1VjEyMQ0KCQkJQzUxMiw5Ni4zMDYsNDkxLjk0Myw3Niw0NjcsNzZ6IE00NjAuNjk4LDEwNmMtOS4xOTQsOS4xNDUtMTY3LjQxNSwxNjYuNTMzLTE3Mi44NzgsMTcxLjk2N2MtOC41LDguNS0xOS44LDEzLjE4LTMxLjgyLDEzLjE4DQoJCQlzLTIzLjMyLTQuNjgxLTMxLjg0OC0xMy4yMDhDMjIwLjQ3OCwyNzQuMjg0LDY0LjAwMywxMTguNjM0LDUxLjMwMiwxMDZINDYwLjY5OHogTTMwLDM4NC44OTRWMTI3LjEyNUwxNTkuNjM4LDI1Ni4wOEwzMCwzODQuODk0eg0KCQkJIE01MS4zMjEsNDA2bDEyOS41ODctMTI4Ljc2M2wyMi4wNTksMjEuOTQzYzE0LjE2NiwxNC4xNjYsMzMsMjEuOTY3LDUzLjAzMywyMS45NjdjMjAuMDMzLDAsMzguODY3LTcuODAxLDUzLjAwNS0yMS45MzkNCgkJCWwyMi4wODctMjEuOTcxTDQ2MC42NzksNDA2SDUxLjMyMXogTTQ4MiwzODQuODk0TDM1Mi4zNjIsMjU2LjA4TDQ4MiwxMjcuMTI1VjM4NC44OTR6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                  size="16px"
                  radius="4px"
                  bgColor="inherit"></Image>
                <Input
                  variant="profileicon-input"
                  className="w-[100%] text-[13px] md:w-[100%] lg:w-[100%]"
                  id="email"
                  type="email"
                  name="email" 
                  onChange={handleChange}></Input>
              </Box>
            </ColumnContainer>
          </ColumnContainer>
          <ColumnContainer
            className="items-start w-[100%] md:items-start md:w-[100%] lg:items-start lg:w-[100%]"
            >
            <ColumnContainer
              className="items-start text-[15px] w-[100%] gap-y-[5px] md:items-start md:text-[15px] md:w-[100%] lg:items-start lg:text-[15px] lg:w-[100%]"
             >
              <Label
                variant="profile-label"
                for="email"
                name="label"
                htmlFor="email">
                Phone Number
              </Label>
              <Box
                variant="profileicon-input"
                className="w-[100%] md:w-[50%] lg:w-[100%]">
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6klEQVR4nO2UrQrCYBSGH7TbBGHBoFehUS/AYBYvQZNeik2wKOwSFOwGiwNBtApWFQ06J4MzGPJN2HaW9IWT9vE+nJ+98FdMNYED4AEusAIqKGov5uGaagKOBoCjCVgaAGdNwMgAcIG8FqBrACxQVAG4hcy3QAll2WLuX1SRDFQHXrJci4w0ky7srABl4CqQflaQlpyoX+0v73JpIEPp4gn0Pr75BzAP7cuRWKnGhQyki2AnlphvDP+MJwGZaFyXUHSYQjGoBwllARMZSZR5MM5Uqsmo7hEAvzu1WOkAY2ANnIAd0NAC8Bt6A9vPYU+qAWblAAAAAElFTkSuQmCC"
                  size="16px"
                  radius="4px"
                  bgColor="inherit"></Image>
                <Input
                  variant="profileicon-input"
                  className="w-[100%] text-[13px] md:w-[100%] lg:w-[100%]"
                  id="email"
                  type="email"
                  name="phoneNumber"
                  onChange={handleChange}></Input>
              </Box>
            </ColumnContainer>
          </ColumnContainer>
        </RowContainer>
        <RowContainer className="items-center w-[100%] gap-[10px] md:items-center md:w-[100%] lg:items-center lg:w-[100%]"
          gap="20px">
          <ColumnContainer
            className="items-start w-[100%] md:items-start md:w-[100%] lg:items-start lg:w-[100%]"
            >
            <ColumnContainer
              className="items-start text-[15px] w-[100%] gap-y-[5px] md:items-start md:text-[15px] lg:items-start lg:text-[15px] lg:w-[100%]"
             >
              <Label
                variant="profile-label"
                for="email"
                name="label"
                htmlFor="email">
                Website
              </Label>
              <Box
                variant="profileicon-input"
                className="w-[100%] md:w-[50%] lg:w-[100%]">
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABY0lEQVR4nO2ZTU7DMBBGH5tsoFcocBUoh6Ldkp6AVtyuhQsQ1EUbqcjIkiNZVlD808QWzJNmM8pMvsnYk8gBQRCEkrkDNsAeUBPbHngFbmPFPwFNBuHKsU/gMVT8fSHilVVEUCc2ToJn4BpYDvg6f0UaVU9evZy8cdf8jfHPBny2P5VZz57w5tsJXhphqwFf579EB1ZOXq3JG1WoeZNbqJICiGjbSKjUJZQbJQX8pQ6sgdZzYujr6sD4tifmogX4iu/sFBF/GrOA1NmdGuNNarKYeCUFWEgHkCVU/hSKuWf290D2AurAN/FLaQWkIgXw3zuwBo6ee+A48GU5+bfQFXAInEL6+qK+RuvEDgxNsTZwcv3K2QpKPaRKobJ0aE3efFiBD+RjEXu0+GYF7kyiKTtRmeP9naVjG5JAH2V/BW7YMa0B5qFPYVFIEU3MD46OuWndu7Oxx7azuec25skLgiAwGT+VXQNDRom/rgAAAABJRU5ErkJggg=="
                  size="16px"
                  radius="4px"
                  bgColor="inherit"></Image>
                <Input
                  variant="profileicon-input"
                  className="w-[100%] text-[13px] md:w-[100%] lg:w-[100%]"
                  placeholder="google.com"
                  id="email"
                  type="email"
                  name="website"
                  onChange={handleChange}></Input>
              </Box>
            </ColumnContainer>
          </ColumnContainer>
        </RowContainer>
      </ColumnContainer>
      <RowContainer gap="15px">
          <Button
            variant="integration-btn"
            className="bg-[#090b0e] text-[#ffffffff] md:bg-[#090b0e] md:text-[#ffffffff] lg:bg-[#090b0e] lg:text-[#ffffffff]"
            onClick={handleSubmit}>
            Calculate
          </Button>
      </RowContainer>
    </Box>
  );
}
