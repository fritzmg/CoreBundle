<?php
/**
 * Eden
 * @version   2.0.0
 * @package   con4gis
 * @author    con4gis authors (see "authors.txt")
 * @copyright Küstenschmiede GmbH Software & Design 2016 - 2017.
 * @link      https://www.kuestenschmiede.de
 */
namespace con4gis\coreBundle\Entity;

/**
 * Class BaseEntity
 * @package con4gis\coreBundle\Entity
 */
abstract class BaseEntity
{

    /**
     * BaseEntiy constructor.
     * @param array $data
     */
    public function __construct($data = array())
    {
        $this->setData($data);
    }


    /**
     * Setzt die Daten eines Arrays als Eigenschaften der Klasse.
     * @param $data
     */
    public function setData($data)
    {
        if (is_array($data) && count($data)) {
            foreach ($data as $column => $value) {
                if (property_exists($this, $column)) {
                    $column = 'set' . ucfirst($column);
                    $this->$column($value);
                }
            }
        }
    }
}
