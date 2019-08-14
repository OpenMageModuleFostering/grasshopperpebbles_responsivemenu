<?php
class Grasshopperpebbles_Responsivemenu_Block_Adminhtml_System_Config_Form_Field_Mediaqueries extends Mage_Adminhtml_Block_System_Config_Form_Field
{
	/**
    * Returns html part of the setting
    *
    * @param Varien_Data_Form_Element_Abstract $element
    * @return string
    */
   protected function _getElementHtml(Varien_Data_Form_Element_Abstract $element)
   {
       $this->setElement($element);
 
       $html = '<div id="responsive-menu-select-cntnr">';
	   $html .= $this->_getResponsiveOptionsTemplateHtml();
	   $html .= '</div>';
	   $html .= $this->_getQueryModeTableHtml();
	   
       return $html;
   }
   
   protected function _getResponsiveOptionsTemplateHtml()
   {
   		$responsive_modes = array(
		    'InlineOverlay' => 'InlineOverlay',
		    'Select' => 'Select',
		    'SplitView' => 'SplitView',
		    'Vertical' => 'Vertical',
		    'VerticalOverlay' => 'VerticalOverlay',
		);
   		$html = '<table>';
		$html .= '<tr>';
		$html .= '<td><label for="query-mode-option">Mode</label></td>';
		$html .= '<td><label for="query-mode-min-value">Min</label></td>';
		$html .= '<td><label for="query-mode-max-value">Max</label></td>';
		$html .= '<td></td>';
   		$html .= '</tr>';
		$html .= '<tr>';
		$html .= '<td>';
   		$html .= '<select name="query-mode-option" id="query-mode-option">';
   		
		foreach ($responsive_modes as $key=>$value) {
			$html .= '<option value="'. $key.'">'.$value.'</option>';
		}
		$html .= '</select>';
		$html .= '</td>';
		$html .= '<td>';
		$html .= '<input type="text" name="query-mode-min-value" id="query-mode-min-value" />';
		$html .= '</td>';
		$html .= '<td>';
		$html .= '<input type="text" name="query-mode-max-value" id="query-mode-max-value" />';
		$html .= '</td>';
		$html .= '<td>';
		$html .= '<button id="query-mode-add">Add Query Mode</button>';
		$html .= '</td>';
		$html .= '</tr>';
		$html .= '</table>';
		return $html;
   }
	
	protected function _getQueryModeTableHtml() {
		$html = '<table id="query-mode-table">';
		$html .= '<thead><tr><th>Mode</th><th>Min</th><th>Max</th><th>Action</th></tr></thead>';
		$html .= '<tbody></tbody>';
		$html .= '</table>';
		return $html;
	}

}
	