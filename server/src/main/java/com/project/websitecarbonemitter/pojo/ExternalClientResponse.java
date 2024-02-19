package com.project.websitecarbonemitter.pojo;

import lombok.Data;

@Data
public class ExternalClientResponse{
    public String url;
    public boolean green;
    public int bytes;
    public double cleanerThan;
    public String rating;
    public Statistics statistics;
    public int timestamp;
}

@Data
class Statistics{
    public double adjustedBytes;
    public double energy;
    public Co2 co2;
}

@Data
class Co2{
    public Grid grid;
    public Renewable renewable;
}

@Data
class Grid{
    public double grams;
    public double litres;
}

@Data
class Renewable{
    public double grams;
    public double litres;
}

