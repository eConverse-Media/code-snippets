/* Targets textnodes to be able to target them w/ css applies textnode class to them */

$("[Locations to textnode]").contents().filter(function() {
    return this.nodeType == Node.TEXT_NODE;
  }).wrap("<span class=\"textnode\"></span>");
  