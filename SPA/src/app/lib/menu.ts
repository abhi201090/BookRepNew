
import * as $ from 'jquery';
import { MenuList } from '../lib/MenuList';

export class menu {
    constructor() {
        $(document).ready(() => {

            (function () {
                var $activeWidth, $defaultMarginLeft: any, $defaultPaddingLeft: any, $firstChild: any, $line: any, $navListItem, $next: any;

                $line = $('#line');

                $navListItem = $('.nav-li');

                $activeWidth = $('.active-nav').width();

                $firstChild = $('.nav-li:first-child');

                $next = $firstChild.next().css('marginLeft');

                $defaultMarginLeft = parseInt($('.nav-li:first-child').next().css('marginLeft').replace(/\D/g, ''));

                $defaultPaddingLeft = parseInt($('#nav-container > ul').css('padding-left').replace(/\D/g, ''));

                $line.width($activeWidth + 'px');

                $line.css('marginLeft', $defaultPaddingLeft + 'px');

                $navListItem.click(function () {
                    var $activeNav, $currentIndex, $currentOffset, $currentWidth, $initWidth, $marginLeftToSet: any, $this: any;
                    $this = $(this);
                    $activeNav = $('.active-nav');
                    $currentWidth = $activeNav.width();
                    $currentOffset = $activeNav.position().left;
                    $currentIndex = $activeNav.index();
                    $activeNav.removeClass('active-nav');
                    $this.addClass('active-nav');
                    if ($this.is($activeNav)) {
                        return 0;
                    } else {
                        if ($this.index() > $currentIndex) {
                            if ($activeNav.is($firstChild)) {
                                $initWidth = $defaultMarginLeft + $this.width() + $this.position().left - $defaultPaddingLeft;
                            } else {
                                $initWidth = $this.position().left + $this.width() - $currentOffset;
                            }
                            $marginLeftToSet = $this.position().left + $defaultMarginLeft + 'px';
                            $line.width($initWidth + 'px');
                            return setTimeout(function () {
                                $line.css('marginLeft', $marginLeftToSet);
                                return $line.width($this.width() + 'px');
                            }, 175);
                        } else {
                            if ($this.is($firstChild)) {
                                $initWidth = $currentOffset - $defaultPaddingLeft + $defaultMarginLeft + $currentWidth;
                                $marginLeftToSet = $this.position().left;
                            } else {
                                $initWidth = $currentWidth + $currentOffset - $this.position().left;
                                $marginLeftToSet = $this.position().left + $defaultMarginLeft;
                            }
                            $line.css('marginLeft', $marginLeftToSet);
                            $line.width($initWidth + 'px');
                            return setTimeout(function () {
                                return $line.width($this.width() + 'px');
                            }, 175);
                        }
                    }
                });
            }).call(this);
            //console.log('render');
            $.fn.extend({
                treed: function (o: any) {
                    //alert('tree');
                    var openedClass = 'glyphicon-minus-sign';
                    var closedClass = 'glyphicon-plus-sign';

                    if (typeof o != 'undefined') {
                        if (typeof o.openedClass != 'undefined') {
                            openedClass = o.openedClass;
                        }
                        if (typeof o.closedClass != 'undefined') {
                            closedClass = o.closedClass;
                        }
                    };

                    //initialize each of the top levels
                    var tree = $(this);
                    tree.addClass("tree");
                    tree.find('li').has("ul").each(function () {
                        var branch = $(this); //li with children ul
                        branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
                        branch.addClass('branch');
                        branch.on('click', function (e: any) {
                            if (this == e.target) {
                                var icon = $(this).children('i:first');
                                icon.toggleClass(openedClass + " " + closedClass);
                                $(this).children().children().toggle();
                            }
                        })
                        branch.children().children().toggle();
                    });
                    //fire event from the dynamically added icon
                    tree.find('.branch .indicator').each(function () {
                        $(this).on('click', function () {
                            $(this).closest('li').click();
                        });
                    });
                    //fire event to open branch if the li contains an anchor instead of text
                    tree.find('.branch>a').each(function () {
                        $(this).on('click', function (e: any) {
                            $(this).closest('li').click();
                            e.preventDefault();
                        });
                    });
                    //fire event to open branch if the li contains a button instead of text
                    tree.find('.branch>button').each(function () {
                        $(this).on('click', function (e: any) {
                            $(this).closest('li').click();
                            e.preventDefault();
                        });
                    });
                    //console.log(JSON.stringify(tree));
                }
            });

            //Initialization of treeviews

            (<any>$('#tree1')).treed();

            (<any>$('#tree2')).treed({ openedClass: 'glyphicon-folder-open', closedClass: 'glyphicon-folder-close' });

            (<any>$('#tree3')).treed({ openedClass: 'glyphicon-chevron-right', closedClass: 'glyphicon-chevron-down' });


            $('.toggle-children').addClass('indicator glyphicon glyphicon-plus-sign').removeClass('toggle-children');
        });
    }

}





