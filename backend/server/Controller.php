<?php

namespace server;

class Controller
{
    private $obj;

    public function __construct($json = null)
    {
        $this->obj = $json;
    }

    public function calc() : array
    {
        $param = $this->obj;

        $currDate = date("Y-m-d");

        $date = $currDate;

        $result = [];

        if($param){
            
            for ($i = 0; $i < $param["noMonthForecast"]; $i++) {

                $param["currNumStudy"] += $param["currNumStudy"]*($param["noStudyGrowth"]/100);
                $cost = round(
                    (((($param["currNumStudy"])/2000) * 0.00553) * 730 ) // RAM
                    + ((($param["currNumStudy"]) * 10)/1000) * 0.10 // Storage
                    , 2);
    
                $result[$i] = array(
                    "id"=> $i,
                    "monthYear" => date('M Y', strtotime(' + ' . $i .' month')),
                    "noStudies" => round($param["currNumStudy"]),     
                    "costForecast" => $cost
                );
    
            } 
        }
        
        return $result;
    }

}