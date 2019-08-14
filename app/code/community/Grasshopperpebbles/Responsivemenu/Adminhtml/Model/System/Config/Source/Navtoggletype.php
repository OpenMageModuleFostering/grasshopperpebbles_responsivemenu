<?php
class Grasshopperpebbles_Responsivemenu_Adminhtml_Model_System_Config_Source_Navtoggletype
{
    public function toOptionArray()
    {
        return array(
            array('value'=>'text', 'label'=>Mage::helper('adminhtml')->__('Text')),
            array('value'=>'icon', 'label'=>Mage::helper('adminhtml')->__('Icon')),                       
        );
    }

}