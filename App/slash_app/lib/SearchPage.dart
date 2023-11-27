import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:slash_app/ResultPage.dart';
import 'package:slash_app/GraphPage.dart';

class SearchPage extends StatefulWidget {
  const SearchPage({super.key});

  @override
  State<SearchPage> createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  List<DropdownMenuItem<String>> get dropdownItems {
    List<DropdownMenuItem<String>> menuItems = [
      const DropdownMenuItem(value: "costco", child: Text("CostCo")),
      const DropdownMenuItem(value: "ebay", child: Text("Ebay")),
      const DropdownMenuItem(value: "walmart", child: Text("Walmart")),
    ];
    return menuItems;
  }

  String selectedValue = "walmart";
  IconData selectedIcon = Icons.search_rounded;
  final _textController = TextEditingController();

  void _navigateToResultScreen() {
    String searchText = _textController.text;
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) => ResultPage(selectedValue, searchText),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final mediaQuery = MediaQuery.of(context);
    final Widget pageBody = Container(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          DropdownButton(
            alignment: AlignmentDirectional.center,
            borderRadius: BorderRadius.circular(15),
            elevation: 10,
            iconEnabledColor: Colors.black,
            padding: const EdgeInsets.all(10),
            items: dropdownItems,
            value: selectedValue,
            onChanged: (String? newValue) {
              setState(() {
                selectedValue = newValue!;
              });
            },
          ),
          const SizedBox(height: 20),
          TextField(
            controller: _textController,
            textCapitalization: TextCapitalization.sentences,
            autocorrect: true,
            cursorColor: Colors.black,
            showCursor: true,
            onTap: () => setState(() {
              selectedIcon = Icons.clear_rounded;
            }),
            decoration: InputDecoration(
              hintText: 'Search Products...',
              hintStyle: const TextStyle(color: Colors.black),
              suffixIcon: IconButton(
                onPressed: () {
                  _textController.clear();
                },
                icon: Icon(selectedIcon),
              ),
              border: InputBorder.none,
              contentPadding: const EdgeInsets.all(15),
            ),
          ),
          const SizedBox(height: 20),
          Container(
            height: mediaQuery.size.height / 15,
            width: mediaQuery.size.width / 5,
            decoration: BoxDecoration(
              color: Theme.of(context).primaryColor,
              borderRadius: BorderRadius.circular(15),
            ),
            child: TextButton(
              onPressed: _navigateToResultScreen,
              child: const Text(
                'Search',
                style: TextStyle(
                  fontSize: 15,
                  color: Colors.black,
                ),
              ),
            ),
          )
        ],
      ),
    );

    return Platform.isIOS
        ? CupertinoPageScaffold(
            navigationBar: const CupertinoNavigationBar(
              middle: Text('Slash App'),
            ),
            child: pageBody,
          )
        : Scaffold(
            appBar: AppBar(
              title: const Text('Slash App'),
              backgroundColor: Theme.of(context).primaryColor,
              foregroundColor: Colors.black,
            ),
            drawer: Drawer(
              child: ListView(
                children: [
                  ListTile(
                    title: const Text('Search Product'),
                    onTap: () => Navigator.push(context, MaterialPageRoute(builder: (context)=> const SearchPage())),
                  ),
                  ListTile(
                    title: const Text('Graphs'),
                    onTap: () => Navigator.push(context, MaterialPageRoute(builder: (context)=> const GraphPage())),
                  ),
                ],
              ),
            ),
            body: pageBody,
          );
  }
}