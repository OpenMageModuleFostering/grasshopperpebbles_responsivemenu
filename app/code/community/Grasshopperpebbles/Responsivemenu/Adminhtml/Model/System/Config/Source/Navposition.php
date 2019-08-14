<?php
class Grasshopperpebbles_Responsivemenu_Adminhtml_Model_System_Config_Source_Navposition
{
    public function toOptionArray()
    {
        return array(
            array('value'=>'first', 'label'=>Mage::helper('adminhtml')->__('First')),
            array('value'=>'last', 'label'=>Mage::helper('adminhtml')->__('Last')),                       
        );
    }

}