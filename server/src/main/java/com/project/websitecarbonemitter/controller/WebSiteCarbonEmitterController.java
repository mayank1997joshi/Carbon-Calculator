package com.project.websitecarbonemitter.controller;

// controller Class
import com.project.websitecarbonemitter.pojo.ExternalClientResponse;
import com.project.websitecarbonemitter.pojo.WebsiteCarbonResponse;
import com.project.websitecarbonemitter.pojo.WebsiteRequestBody;
import com.project.websitecarbonemitter.service.WebSiteCarbonEmitterService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/v1")
public class WebSiteCarbonEmitterController {

    final WebSiteCarbonEmitterService webSiteCarbonEmitterService;

    public WebSiteCarbonEmitterController (final WebSiteCarbonEmitterService webSiteCarbonEmitterService){
        this.webSiteCarbonEmitterService = webSiteCarbonEmitterService;
    }


    @PostMapping("/getemissioninfo")
    @CrossOrigin(origins = "*", allowedHeaders = "Requestor-Type")
    public WebsiteCarbonResponse getWebsiteCarbonEmissionInfo(@RequestBody WebsiteRequestBody websiteRequestBody){
          ExternalClientResponse externalClientResponse = webSiteCarbonEmitterService.getWebsiteCarbonEmissionDetails(websiteRequestBody.getWebSiteName());
          WebsiteCarbonResponse websiteCarbonResponse = new WebsiteCarbonResponse();
          if(externalClientResponse != null){
              websiteCarbonResponse.setRating(externalClientResponse.getRating());
              websiteCarbonResponse.setCleanerThan(externalClientResponse.getCleanerThan());
             // webSiteCarbonEmitterService.sendEmail(websiteRequestBody, externalClientResponse);
          }

          return websiteCarbonResponse;
    }

}
