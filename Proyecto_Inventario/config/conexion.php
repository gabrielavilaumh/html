<?php
    class Conectar{
        protected $dbh;

        protected function Conexion(){
            try {
                $conectar = $this->dbh = new PDO("mysql:host=192.168.0.15;dbname=PROYECTO","root","1234");
                return $conectar;
            }catch (Exception $e) {
                print "¡Error BD:! " . $e->getMessage() . "<br/>";
                die();
            }
        }
        public function set_names(){
            return $this->dbh->query("SET NAMES 'utf8'");
        }
    }    
?>
