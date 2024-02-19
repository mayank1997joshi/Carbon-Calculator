package com.project.websitecarbonemitter.pojo;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Data;

@Data
public class WebsiteRequestBody {
    String name;
    String email;
    @JsonProperty("phonenumber")
    Long phoneNumber;
    @JsonProperty("websitename")
    String webSiteName;

}
