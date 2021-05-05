<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\CoreBundle\Classes\Contao\Callback;

use Contao\Backend;
use Contao\Database;

class MaintenanceCallback extends Backend
{
    public function purgeLog()
    {
        $database = Database::getInstance();
        $database->prepare('TRUNCATE tl_c4g_log')->execute();
    }
}
