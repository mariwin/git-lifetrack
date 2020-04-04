<?php

namespace server;

use PHPRouting\routing\response\Error;
use PHPRouting\routing\Router;
use PHPRouting\routing\Request;
use PHPRouting\routing\response\Response;

class Loader
{

    public static function handle() : void
    {

        Router::init("");

        Router::handle404(function() {
            die(new Error("404 - Ressource not found"));
         });

          # GET Request
        Router::get("/", function(Request $req, Response $res) {
            # $req is Request object with access to headers, files, body etc.
            # $res is Response object to send data back to client       
            $res->send("Hello!");   
        });

        # POST Request
        Router::post("/api", function(Request $req, Response $res) {
        
            $json_obj = $req->get_body();
           
            if($json_obj) {
                
                try {

                    $controller = new Controller($json_obj);

                    $result = $controller->calc();

                    $res->send(array("type" => "success", "data" => $result));

                } catch (Exception $ex) {
            
                    $res->send_error( $ex);
                }

            } else {

                $res->send_error("Failure message");

            }
        
        });

        Router::run();

    }

}