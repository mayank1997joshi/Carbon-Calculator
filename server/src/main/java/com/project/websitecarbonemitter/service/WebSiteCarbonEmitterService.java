package com.project.websitecarbonemitter.service;

import com.project.websitecarbonemitter.pojo.ExternalClientResponse;
import com.project.websitecarbonemitter.pojo.WebsiteCarbonResponse;
import com.project.websitecarbonemitter.pojo.WebsiteRequestBody;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.net.http.HttpResponse;



@Service
public class WebSiteCarbonEmitterService {

    private final JavaMailSender emailSender;

    public static String EXTERNAL_URL = "https://api.websitecarbon.com/site?url=https://";

    public WebSiteCarbonEmitterService(JavaMailSender emailSender) {
        this.emailSender = emailSender;
    }

    public ExternalClientResponse getWebsiteCarbonEmissionDetails(String webSiteName){
        String url = EXTERNAL_URL+webSiteName;

        WebClient webClient = WebClient.create();
        Mono<ExternalClientResponse> responseMono = webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(ExternalClientResponse.class);

        try{
            return responseMono.block();
        }
        catch (Exception exception){
            return null;
        }
    }

    public void sendEmail(WebsiteRequestBody websiteRequestBody, ExternalClientResponse externalClientResponse){
        String messageBody = "Hi Admin, Below are the details for the visitor"+websiteRequestBody.toString()+"\n and the response is "+externalClientResponse.toString();
        String subject = "Website Carbon Emitter Request";
        MimeMessage message = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        try {
            helper.setTo("mayank97joshi@gmail.com");
            helper.setSubject(subject);
            helper.setText(messageBody);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        emailSender.send(message); //email sender
    }

}
